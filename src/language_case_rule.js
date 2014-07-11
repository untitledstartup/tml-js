/**
 * Copyright (c) 2014 Michael Berkovich, TranslationExchange.com
 *
 *  _______                  _       _   _             ______          _
 * |__   __|                | |     | | (_)           |  ____|        | |
 *    | |_ __ __ _ _ __  ___| | __ _| |_ _  ___  _ __ | |__  __  _____| |__   __ _ _ __   __ _  ___
 *    | | '__/ _` | '_ \/ __| |/ _` | __| |/ _ \| '_ \|  __| \ \/ / __| '_ \ / _` | '_ \ / _` |/ _ \
 *    | | | | (_| | | | \__ \ | (_| | |_| | (_) | | | | |____ >  < (__| | | | (_| | | | | (_| |  __/
 *    |_|_|  \__,_|_| |_|___/_|\__,_|\__|_|\___/|_| |_|______/_/\_\___|_| |_|\__,_|_| |_|\__, |\___|
 *                                                                                        __/ |
 *                                                                                       |___/
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

Tr8n.LanguageCaseRule = function(attrs) {
  Tr8n.Utils.extend(this, attrs);
};

Tr8n.LanguageCaseRule.getConditionsExpression = function() {
  if (!this.conditions_expression)
    this.conditions_expression = (new Tr8n.RulesEngine.Parser(this.conditions)).parse();
  return this.conditions_expression;
};

Tr8n.LanguageCaseRule.getOperationsExpression = function() {
  if (!this.operations_expression)
    this.operations_expression = (new Tr8n.RulesEngine.Parser(this.operations)).parse();
  return this.operations_expression;
};

Tr8n.LanguageCaseRule.getGenderVariables = function(object) {
  if (object == null)
    return {gender: 'unknown'};

  if (this.conditions.indexOf("@gender") == -1)
    return {};

  var context = this.language_case.language.getContextByKeyword("gender");

  if (context == null)
    return {gender: 'unknown'};

  return context.vars(object);
};

Tr8n.LanguageCaseRule.evaluate = function(value, object) {
  if (this.attrs.conditions == null)
    return false;

  var evaluator = new Tr8n.RulesEngine.Evaluator();
  evaluator.setVars(Tr8n.Utils.extend({value: value}, this.getGenderVariables(object)));

  return evaluator.evaluate(this.getConditionsExpression());
};

Tr8n.LanguageCaseRule.apply = function(value) {
  if (this.attrs.operations == null)
    return value;

  var evaluator = new Tr8n.RulesEngine.Evaluator();
  evaluator.setVars({value: value});

  return evaluator.evaluate(this.getOperationsExpression());
};


