Tr8n.cache(function(data) {
  data.languages["en-US"] = {
    "locale":"en-US",
    "name":"English (US)",
    "english_name":"English (U.S.)",
    "native_name":"English (US)",
    "flag_url":"http://lvh.me:3000/media/57/23/20/19/cf185dab9566b718e.png",
    "curse_words":"fuck",
    "fallback":"en",
    "contexts":{
      "genders":{
        "keyword":"genders",
        "description":"",
        "keys":[
          "male",
          "female",
          "unknown",
          "other"
        ],
        "token_expression":"/.*(users|profiles|actors|targets)(\\d)*$/",
        "variables":[
          "@genders"
        ],
        "token_mapping":[
          {
            "male":"{$0}",
            "female":"{$0}",
            "unknown":"{$0}",
            "other":"{$0}"
          },
          {
            "male":"{$0}",
            "female":"{$0}",
            "unknown":"{$0}",
            "other":"{$1}"
          },
          {
            "male":"{$0}",
            "female":"{$1}",
            "unknown":"{$0}/{$1}",
            "other":"{$2}"
          },
          {
            "male":"{$0}",
            "female":"{$1}",
            "unknown":"{$2}",
            "other":"{$3}"
          }
        ],
        "rules":{
          "female":{
            "keyword":"female",
            "description":"{token} contains 1 female",
            "conditions":"(&& (= 1 (count @genders)) (all @genders 'female'))",
            "conditions_expression":[
              "&&",
              [
                "=",
                1,
                [
                  "count",
                  "@genders"
                ]
              ],
              [
                "all",
                "@genders",
                "female"
              ]
            ]
          },
          "male":{
            "keyword":"male",
            "description":"{token} contains 1 male",
            "conditions":"(&& (= 1 (count @genders)) (all @genders 'male'))",
            "conditions_expression":[
              "&&",
              [
                "=",
                1,
                [
                  "count",
                  "@genders"
                ]
              ],
              [
                "all",
                "@genders",
                "male"
              ]
            ]
          },
          "other":{
            "keyword":"other",
            "description":"{token} contains at least 2 people"
          },
          "unknown":{
            "keyword":"unknown",
            "description":"{token} contains 1 person with unknown gender",
            "conditions":"(&& (= 1 (count @genders)) (all @genders 'unknown'))",
            "conditions_expression":[
              "&&",
              [
                "=",
                1,
                [
                  "count",
                  "@genders"
                ]
              ],
              [
                "all",
                "@genders",
                "unknown"
              ]
            ]
          }
        }
      },
      "date":{
        "keyword":"date",
        "keys":[
          "past",
          "present",
          "future"
        ],
        "token_expression":"/.*(date|time)(\\d)*$/",
        "variables":[
          "@date"
        ],
        "token_mapping":[
          "unsupported",
          "unsupported",
          {
            "past":"{$0}",
            "present":"{$1}",
            "future":"{$2}"
          }
        ],
        "rules":{
          "future":{
            "keyword":"future",
            "description":"{token} is in the past",
            "conditions":"(< @date (today))",
            "conditions_expression":[
              "<",
              "@date",
              [
                "today"
              ]
            ]
          },
          "past":{
            "keyword":"past",
            "description":"{token} is in the future",
            "conditions":"(> @date (today))",
            "conditions_expression":[
              ">",
              "@date",
              [
                "today"
              ]
            ]
          },
          "present":{
            "keyword":"present",
            "description":"{token} is in the present",
            "conditions":"(= @date (today))",
            "conditions_expression":[
              "=",
              "@date",
              [
                "today"
              ]
            ]
          }
        }
      },
      "gender":{
        "keyword":"gender",
        "keys":[
          "male",
          "female",
          "other"
        ],
        "token_expression":"/.*(user|translator|profile|actor|target)(\\d)*$/",
        "variables":[
          "@gender"
        ],
        "token_mapping":[
          {
            "other":"{$0}"
          },
          {
            "male":"{$0}",
            "female":"{$1}",
            "other":"{$0}/{$1}"
          },
          {
            "male":"{$0}",
            "female":"{$1}",
            "other":"{$2}"
          }
        ],
        "rules":{
          "female":{
            "keyword":"female",
            "description":"{token} is a female",
            "conditions":"(= 'female' @gender)",
            "conditions_expression":[
              "=",
              "female",
              "@gender"
            ]
          },
          "male":{
            "keyword":"male",
            "description":"{token} is a male",
            "conditions":"(= 'male' @gender)",
            "conditions_expression":[
              "=",
              "male",
              "@gender"
            ]
          },
          "other":{
            "keyword":"other",
            "description":"{token}'s gender is unknown"
          }
        }
      },
      "list":{
        "keyword":"list",
        "keys":[
          "one",
          "other"
        ],
        "token_expression":"/.*(items|list)(\\d)*$/",
        "variables":[
          "@count"
        ],
        "token_mapping":[
          "unsupported",
          {
            "one":"{$0}",
            "other":"{$1}"
          }
        ],
        "rules":{
          "one":{
            "keyword":"one",
            "description":"{token} contains 1 element",
            "conditions":"(= 1 @count)",
            "conditions_expression":[
              "=",
              1,
              "@count"
            ]
          },
          "other":{
            "keyword":"other",
            "description":"{token} contains at least 2 elements"
          }
        }
      },
      "number":{
        "keyword":"number",
        "keys":[
          "one",
          "other"
        ],
        "token_expression":"/.*(count|num|minutes|seconds|hours|sum|total)(\\d)*$/",
        "variables":[
          "@n"
        ],
        "token_mapping":[
          {
            "one":"{$0}",
            "other":"{$0::plural}"
          },
          {
            "one":"{$0}",
            "other":"{$1}"
          }
        ],
        "rules":{
          "one":{
            "keyword":"one",
            "description":"{token} is 1",
            "examples":"1",
            "conditions":"(= @n 1)",
            "conditions_expression":[
              "=",
              "@n",
              1
            ]
          },
          "other":{
            "keyword":"other",
            "description":"{token} is not 1",
            "examples":"0, 2-999; 1.2, 2.07..."
          }
        }
      }
    },
    "cases":{
      "ord":{
        "id":1857,
        "keyword":"ord",
        "latin_name":"Ordinal",
        "description":"The adjective form of the cardinal numbers",
        "application":"phrase",
        "rules":[
          {
            "id":26022,
            "description":"append 'st' if value ends in 1, but not in 11",
            "examples":"1, 21, 31, 41, 101, 121...",
            "conditions":"(&& (match '/1$/' @value) (! (match '/11$/' @value)))",
            "conditions_expression":[
              "&&",
              [
                "match",
                "/1$/",
                "@value"
              ],
              [
                "!",
                [
                  "match",
                  "/11$/",
                  "@value"
                ]
              ]
            ],
            "operations":"(append 'st' @value)",
            "operations_expression":[
              "append",
              "st",
              "@value"
            ]
          },
          {
            "id":26023,
            "description":"append 'nd' if value ends in 2, but not in 12",
            "examples":"2, 22, 32, 42, 102, 122...",
            "conditions":"(&& (match '/2$/' @value) (! (match '/12$/' @value)))",
            "conditions_expression":[
              "&&",
              [
                "match",
                "/2$/",
                "@value"
              ],
              [
                "!",
                [
                  "match",
                  "/12$/",
                  "@value"
                ]
              ]
            ],
            "operations":"(append 'nd' @value)",
            "operations_expression":[
              "append",
              "nd",
              "@value"
            ]
          },
          {
            "id":26024,
            "description":"append 'nd' if value ends in 3, but not in 13",
            "examples":"3, 23, 33, 43, 103, 123...",
            "conditions":"(&& (match '/3$/' @value) (! (match '/13$/' @value)))",
            "conditions_expression":[
              "&&",
              [
                "match",
                "/3$/",
                "@value"
              ],
              [
                "!",
                [
                  "match",
                  "/13$/",
                  "@value"
                ]
              ]
            ],
            "operations":"(append 'rd' @value)",
            "operations_expression":[
              "append",
              "rd",
              "@value"
            ]
          },
          {
            "id":26025,
            "description":"append 'th' in all other cases",
            "examples":"0, 4, 5, 6, 7, 8, 9, 11, 12, 13, 111, 113...",
            "conditions":"(match '/^\\d$/' @value)",
            "conditions_expression":[
              "match",
              "/^\\d$/",
              "@value"
            ],
            "operations":"(append 'th' @value)",
            "operations_expression":[
              "append",
              "th",
              "@value"
            ]
          }
        ]
      },
      "ordinal":{
        "id":1858,
        "keyword":"ordinal",
        "latin_name":"Ordinal",
        "description":"The adjective form of the cardinal numbers",
        "application":"phrase",
        "rules":[
          {
            "id":26026,
            "description":"replace 1 with 'first'",
            "conditions":"(= 1 @value)",
            "conditions_expression":[
              "=",
              1,
              "@value"
            ],
            "operations":"(replace 1 'first' @value)",
            "operations_expression":[
              "replace",
              1,
              "first",
              "@value"
            ]
          },
          {
            "id":26027,
            "description":"replace 2 with 'second'",
            "examples":"",
            "conditions":"(= 2 @value)",
            "conditions_expression":[
              "=",
              2,
              "@value"
            ],
            "operations":"(replace 2 'second' @value)",
            "operations_expression":[
              "replace",
              2,
              "second",
              "@value"
            ]
          },
          {
            "id":26028,
            "description":"replace 3 with 'third'",
            "conditions":"(= 3 @value)",
            "conditions_expression":[
              "=",
              3,
              "@value"
            ],
            "operations":"(replace 3 'third' @value)",
            "operations_expression":[
              "replace",
              3,
              "third",
              "@value"
            ]
          }
        ]
      },
      "plural":{
        "id":1859,
        "keyword":"plural",
        "latin_name":"Plural",
        "description":"Converts singular form to plural",
        "application":"phrase",
        "rules":[
          {
            "id":26029,
            "description":"Uncountable word",
            "conditions":"(in 'sheep,fish,series,species,money,rice,information,equipment' @value)",
            "conditions_expression":[
              "in",
              "sheep,fish,series,species,money,rice,information,equipment",
              "@value"
            ],
            "operations":"@value",
            "operations_expression":"@value"
          },
          {
            "id":26030,
            "description":"Irregular word",
            "conditions":"(= 'move' @value)",
            "conditions_expression":[
              "=",
              "move",
              "@value"
            ],
            "operations":"(quote 'moves')",
            "operations_expression":[
              "quote",
              "moves"
            ]
          },
          {
            "id":26031,
            "description":"Irregular word",
            "conditions":"(= 'sex' @value)",
            "conditions_expression":[
              "=",
              "sex",
              "@value"
            ],
            "operations":"(quote 'sexes')",
            "operations_expression":[
              "quote",
              "sexes"
            ]
          },
          {
            "id":26032,
            "description":"Irregular word",
            "conditions":"(= 'child' @value)",
            "conditions_expression":[
              "=",
              "child",
              "@value"
            ],
            "operations":"(quote 'children')",
            "operations_expression":[
              "quote",
              "children"
            ]
          },
          {
            "id":26033,
            "description":"Irregular word",
            "conditions":"(= 'person' @value)",
            "conditions_expression":[
              "=",
              "person",
              "@value"
            ],
            "operations":"(quote 'people')",
            "operations_expression":[
              "quote",
              "people"
            ]
          },
          {
            "id":26034,
            "conditions":"(match '/(quiz)$/i' @value)",
            "conditions_expression":[
              "match",
              "/(quiz)$/i",
              "@value"
            ],
            "operations":"(replace '/(quiz)$/i' '$1zes' @value)",
            "operations_expression":[
              "replace",
              "/(quiz)$/i",
              "$1zes",
              "@value"
            ]
          },
          {
            "id":26035,
            "conditions":"(match '/^(ox)$/i' @value)",
            "conditions_expression":[
              "match",
              "/^(ox)$/i",
              "@value"
            ],
            "operations":"(replace '/^(ox)$/i' '$1en' @value)",
            "operations_expression":[
              "replace",
              "/^(ox)$/i",
              "$1en",
              "@value"
            ]
          },
          {
            "id":26036,
            "conditions":"(match '/([m|l])ouse$/i' @value)",
            "conditions_expression":[
              "match",
              "/([m|l])ouse$/i",
              "@value"
            ],
            "operations":"(replace '/([m|l])ouse$/i' '$1ice' @value)",
            "operations_expression":[
              "replace",
              "/([m|l])ouse$/i",
              "$1ice",
              "@value"
            ]
          },
          {
            "id":26037,
            "conditions":"(match '/(matr|vert|ind)ix|ex$/i' @value)",
            "conditions_expression":[
              "match",
              "/(matr|vert|ind)ix|ex$/i",
              "@value"
            ],
            "operations":"(replace '/(matr|vert|ind)ix|ex$/i' '$1ices' @value)",
            "operations_expression":[
              "replace",
              "/(matr|vert|ind)ix|ex$/i",
              "$1ices",
              "@value"
            ]
          },
          {
            "id":26038,
            "conditions":"(match '/(x|ch|ss|sh)$/i' @value)",
            "conditions_expression":[
              "match",
              "/(x|ch|ss|sh)$/i",
              "@value"
            ],
            "operations":"(replace '/(x|ch|ss|sh)$/i' '$1es' @value)",
            "operations_expression":[
              "replace",
              "/(x|ch|ss|sh)$/i",
              "$1es",
              "@value"
            ]
          },
          {
            "id":26039,
            "conditions":"(match '/([^aeiouy]|qu)y$/i' @value)",
            "conditions_expression":[
              "match",
              "/([^aeiouy]|qu)y$/i",
              "@value"
            ],
            "operations":"(replace '/([^aeiouy]|qu)y$/i' '$1ies' @value)",
            "operations_expression":[
              "replace",
              "/([^aeiouy]|qu)y$/i",
              "$1ies",
              "@value"
            ]
          },
          {
            "id":26040,
            "conditions":"(match '/([^aeiouy]|qu)ies$/i' @value)",
            "conditions_expression":[
              "match",
              "/([^aeiouy]|qu)ies$/i",
              "@value"
            ],
            "operations":"(replace '/([^aeiouy]|qu)ies$/i' '$1y' @value)",
            "operations_expression":[
              "replace",
              "/([^aeiouy]|qu)ies$/i",
              "$1y",
              "@value"
            ]
          },
          {
            "id":26041,
            "conditions":"(match '/(hive)$/i' @value)",
            "conditions_expression":[
              "match",
              "/(hive)$/i",
              "@value"
            ],
            "operations":"(replace '/(hive)$/i' '$1s' @value)",
            "operations_expression":[
              "replace",
              "/(hive)$/i",
              "$1s",
              "@value"
            ]
          },
          {
            "id":26042,
            "conditions":"(match '/(?:([^f])fe|([lr])f)$/i' @value)",
            "conditions_expression":[
              "match",
              "/(?:([^f])fe|([lr])f)$/i",
              "@value"
            ],
            "operations":"(replace '/(?:([^f])fe|([lr])f)$/i' '$1$2ves' @value)",
            "operations_expression":[
              "replace",
              "/(?:([^f])fe|([lr])f)$/i",
              "$1$2ves",
              "@value"
            ]
          },
          {
            "id":26043,
            "conditions":"(match '/sis$/i' @value)",
            "conditions_expression":[
              "match",
              "/sis$/i",
              "@value"
            ],
            "operations":"(replace '/sis$/i' 'ses' @value)",
            "operations_expression":[
              "replace",
              "/sis$/i",
              "ses",
              "@value"
            ]
          },
          {
            "id":26044,
            "conditions":"(match '/([ti])um$/i' @value)",
            "conditions_expression":[
              "match",
              "/([ti])um$/i",
              "@value"
            ],
            "operations":"(replace '/([ti])um$/i' '$1a' @value)",
            "operations_expression":[
              "replace",
              "/([ti])um$/i",
              "$1a",
              "@value"
            ]
          },
          {
            "id":26045,
            "conditions":"(match '/(buffal|tomat|potat)o$/i' @value)",
            "conditions_expression":[
              "match",
              "/(buffal|tomat|potat)o$/i",
              "@value"
            ],
            "operations":"(replace '/(buffal|tomat|potat)o$/i' '$1oes' @value)",
            "operations_expression":[
              "replace",
              "/(buffal|tomat|potat)o$/i",
              "$1oes",
              "@value"
            ]
          },
          {
            "id":26046,
            "conditions":"(match '/(bu)s$/i' @value)",
            "conditions_expression":[
              "match",
              "/(bu)s$/i",
              "@value"
            ],
            "operations":"(replace '/(bu)s$/i' '$1ses' @value)",
            "operations_expression":[
              "replace",
              "/(bu)s$/i",
              "$1ses",
              "@value"
            ]
          },
          {
            "id":26047,
            "conditions":"(match '/(alias|status)$/i' @value)",
            "conditions_expression":[
              "match",
              "/(alias|status)$/i",
              "@value"
            ],
            "operations":"(replace '/(alias|status)$/i' '$1es' @value)",
            "operations_expression":[
              "replace",
              "/(alias|status)$/i",
              "$1es",
              "@value"
            ]
          },
          {
            "id":26048,
            "conditions":"(match '/(octop)us$/i' @value)",
            "conditions_expression":[
              "match",
              "/(octop)us$/i",
              "@value"
            ],
            "operations":"(replace '/(octop)us$/i' '$1i' @value)",
            "operations_expression":[
              "replace",
              "/(octop)us$/i",
              "$1i",
              "@value"
            ]
          },
          {
            "id":26049,
            "conditions":"(match '/(ax|test)is$/i' @value)",
            "conditions_expression":[
              "match",
              "/(ax|test)is$/i",
              "@value"
            ],
            "operations":"(replace '/(ax|test)is$/i' '$1es' @value)",
            "operations_expression":[
              "replace",
              "/(ax|test)is$/i",
              "$1es",
              "@value"
            ]
          },
          {
            "id":26050,
            "conditions":"(match '/us$/i' @value)",
            "conditions_expression":[
              "match",
              "/us$/i",
              "@value"
            ],
            "operations":"(replace '/us$/i' '$1es' @value)",
            "operations_expression":[
              "replace",
              "/us$/i",
              "$1es",
              "@value"
            ]
          },
          {
            "id":26051,
            "conditions":"(match '/s$/i' @value)",
            "conditions_expression":[
              "match",
              "/s$/i",
              "@value"
            ],
            "operations":"(replace '/s$/i' 's' @value)",
            "operations_expression":[
              "replace",
              "/s$/i",
              "s",
              "@value"
            ]
          },
          {
            "id":26052,
            "conditions":"(match '/$/' @value)",
            "conditions_expression":[
              "match",
              "/$/",
              "@value"
            ],
            "operations":"(replace '/$/' 's' @value)",
            "operations_expression":[
              "replace",
              "/$/",
              "s",
              "@value"
            ]
          }
        ]
      },
      "pos":{
        "id":1860,
        "keyword":"pos",
        "latin_name":"Possessive",
        "description":"Used to indicate possession (i.e., ownership). It is usually created by adding 's to the word",
        "application":"phrase",
        "rules":[
          {
            "id":26053,
            "description":"if value ends in s, append '",
            "conditions":"(match '/s$/' @value)",
            "conditions_expression":[
              "match",
              "/s$/",
              "@value"
            ],
            "operations":"(append \"'\" @value)",
            "operations_expression":[
              "append",
              "'",
              "@value"
            ]
          },
          {
            "id":26054,
            "description":"in all other cases, append 's",
            "conditions":"(true)",
            "conditions_expression":[
              "true"
            ],
            "operations":"(append \"'s\" @value)",
            "operations_expression":[
              "append",
              "'s",
              "@value"
            ]
          }
        ]
      },
      "singular":{
        "id":1861,
        "keyword":"singular",
        "latin_name":"Singular",
        "description":"Converts plural form to singular",
        "application":"phrase",
        "rules":[
          {
            "id":26055,
            "description":"Uncountable word",
            "conditions":"(in 'sheep,fish,series,species,money,rice,information,equipment' @value)",
            "conditions_expression":[
              "in",
              "sheep,fish,series,species,money,rice,information,equipment",
              "@value"
            ],
            "operations":"@value",
            "operations_expression":"@value"
          },
          {
            "id":26056,
            "description":"Irregular word",
            "conditions":"(= 'moves' @value)",
            "conditions_expression":[
              "=",
              "moves",
              "@value"
            ],
            "operations":"(quote 'move')",
            "operations_expression":[
              "quote",
              "move"
            ]
          },
          {
            "id":26057,
            "description":"Irregular word",
            "conditions":"(= 'sexes' @value)",
            "conditions_expression":[
              "=",
              "sexes",
              "@value"
            ],
            "operations":"(quote 'sex')",
            "operations_expression":[
              "quote",
              "sex"
            ]
          },
          {
            "id":26058,
            "description":"Irregular word",
            "conditions":"(= 'children' @value)",
            "conditions_expression":[
              "=",
              "children",
              "@value"
            ],
            "operations":"(quote 'child')",
            "operations_expression":[
              "quote",
              "child"
            ]
          },
          {
            "id":26059,
            "description":"Irregular word",
            "conditions":"(= 'people' @value)",
            "conditions_expression":[
              "=",
              "people",
              "@value"
            ],
            "operations":"(quote 'person')",
            "operations_expression":[
              "quote",
              "person"
            ]
          },
          {
            "id":26060,
            "conditions":"(match '/(n)ews$/i' @value)",
            "conditions_expression":[
              "match",
              "/(n)ews$/i",
              "@value"
            ],
            "operations":"(replace '/(n)ews$/i' '$1ews' @value)",
            "operations_expression":[
              "replace",
              "/(n)ews$/i",
              "$1ews",
              "@value"
            ]
          },
          {
            "id":26061,
            "conditions":"(match '/([ti])a$/i' @value)",
            "conditions_expression":[
              "match",
              "/([ti])a$/i",
              "@value"
            ],
            "operations":"(replace '/([ti])a$/i' '$1um' @value)",
            "operations_expression":[
              "replace",
              "/([ti])a$/i",
              "$1um",
              "@value"
            ]
          },
          {
            "id":26062,
            "conditions":"(match '/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i' @value)",
            "conditions_expression":[
              "match",
              "/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i",
              "@value"
            ],
            "operations":"(replace '/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i' '$1$2sis' @value)",
            "operations_expression":[
              "replace",
              "/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i",
              "$1$2sis",
              "@value"
            ]
          },
          {
            "id":26063,
            "conditions":"(match '/(^analy)ses$/i' @value)",
            "conditions_expression":[
              "match",
              "/(^analy)ses$/i",
              "@value"
            ],
            "operations":"(replace '/(^analy)ses$/i' '$1sis' @value)",
            "operations_expression":[
              "replace",
              "/(^analy)ses$/i",
              "$1sis",
              "@value"
            ]
          },
          {
            "id":26064,
            "conditions":"(match '/([^f])ves$/i' @value)",
            "conditions_expression":[
              "match",
              "/([^f])ves$/i",
              "@value"
            ],
            "operations":"(replace '/([^f])ves$/i' '$1fe' @value)",
            "operations_expression":[
              "replace",
              "/([^f])ves$/i",
              "$1fe",
              "@value"
            ]
          },
          {
            "id":26065,
            "conditions":"(match '/(hive)s$/i' @value)",
            "conditions_expression":[
              "match",
              "/(hive)s$/i",
              "@value"
            ],
            "operations":"(replace '/(hive)s$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/(hive)s$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26066,
            "conditions":"(match '/(tive)s$/i' @value)",
            "conditions_expression":[
              "match",
              "/(tive)s$/i",
              "@value"
            ],
            "operations":"(replace '/(tive)s$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/(tive)s$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26067,
            "conditions":"(match '/([lr])ves$/i' @value)",
            "conditions_expression":[
              "match",
              "/([lr])ves$/i",
              "@value"
            ],
            "operations":"(replace '/([lr])ves$/i' '$1f' @value)",
            "operations_expression":[
              "replace",
              "/([lr])ves$/i",
              "$1f",
              "@value"
            ]
          },
          {
            "id":26068,
            "conditions":"(match '/([^aeiouy]|qu)ies$/i' @value)",
            "conditions_expression":[
              "match",
              "/([^aeiouy]|qu)ies$/i",
              "@value"
            ],
            "operations":"(replace '/([^aeiouy]|qu)ies$/i' '$1y' @value)",
            "operations_expression":[
              "replace",
              "/([^aeiouy]|qu)ies$/i",
              "$1y",
              "@value"
            ]
          },
          {
            "id":26069,
            "conditions":"(match '/(s)eries$/i' @value)",
            "conditions_expression":[
              "match",
              "/(s)eries$/i",
              "@value"
            ],
            "operations":"(replace '/(s)eries$/i' '$1eries' @value)",
            "operations_expression":[
              "replace",
              "/(s)eries$/i",
              "$1eries",
              "@value"
            ]
          },
          {
            "id":26070,
            "conditions":"(match '/(m)ovies$/i' @value)",
            "conditions_expression":[
              "match",
              "/(m)ovies$/i",
              "@value"
            ],
            "operations":"(replace '/(m)ovies$/i' '$1ovie' @value)",
            "operations_expression":[
              "replace",
              "/(m)ovies$/i",
              "$1ovie",
              "@value"
            ]
          },
          {
            "id":26071,
            "conditions":"(match '/(x|ch|ss|sh)es$/i' @value)",
            "conditions_expression":[
              "match",
              "/(x|ch|ss|sh)es$/i",
              "@value"
            ],
            "operations":"(replace '/(x|ch|ss|sh)es$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/(x|ch|ss|sh)es$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26072,
            "conditions":"(match '/([m|l])ice$/i' @value)",
            "conditions_expression":[
              "match",
              "/([m|l])ice$/i",
              "@value"
            ],
            "operations":"(replace '/([m|l])ice$/i' '$1ouse' @value)",
            "operations_expression":[
              "replace",
              "/([m|l])ice$/i",
              "$1ouse",
              "@value"
            ]
          },
          {
            "id":26073,
            "conditions":"(match '/(bus)es$/i' @value)",
            "conditions_expression":[
              "match",
              "/(bus)es$/i",
              "@value"
            ],
            "operations":"(replace '/(bus)es$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/(bus)es$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26074,
            "conditions":"(match '/(o)es$/i' @value)",
            "conditions_expression":[
              "match",
              "/(o)es$/i",
              "@value"
            ],
            "operations":"(replace '/(o)es$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/(o)es$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26075,
            "conditions":"(match '/(shoe)s$/i' @value)",
            "conditions_expression":[
              "match",
              "/(shoe)s$/i",
              "@value"
            ],
            "operations":"(replace '/(shoe)s$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/(shoe)s$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26076,
            "conditions":"(match '/(cris|ax|test)es$/i' @value)",
            "conditions_expression":[
              "match",
              "/(cris|ax|test)es$/i",
              "@value"
            ],
            "operations":"(replace '/(cris|ax|test)es$/i' '$1is' @value)",
            "operations_expression":[
              "replace",
              "/(cris|ax|test)es$/i",
              "$1is",
              "@value"
            ]
          },
          {
            "id":26077,
            "conditions":"(match '/(octop|vir)i$/i' @value)",
            "conditions_expression":[
              "match",
              "/(octop|vir)i$/i",
              "@value"
            ],
            "operations":"(replace '/(octop|vir)i$/i' '$1us' @value)",
            "operations_expression":[
              "replace",
              "/(octop|vir)i$/i",
              "$1us",
              "@value"
            ]
          },
          {
            "id":26078,
            "conditions":"(match '/(alias|status)es$/i' @value)",
            "conditions_expression":[
              "match",
              "/(alias|status)es$/i",
              "@value"
            ],
            "operations":"(replace '/(alias|status)es$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/(alias|status)es$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26079,
            "conditions":"(match '/^(ox)en$/i' @value)",
            "conditions_expression":[
              "match",
              "/^(ox)en$/i",
              "@value"
            ],
            "operations":"(replace '/^(ox)en$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/^(ox)en$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26080,
            "conditions":"(match '/(vert|ind)ices$/i' @value)",
            "conditions_expression":[
              "match",
              "/(vert|ind)ices$/i",
              "@value"
            ],
            "operations":"(replace '/(vert|ind)ices$/i' '$1ex' @value)",
            "operations_expression":[
              "replace",
              "/(vert|ind)ices$/i",
              "$1ex",
              "@value"
            ]
          },
          {
            "id":26081,
            "conditions":"(match '/(matr)ices$/i' @value)",
            "conditions_expression":[
              "match",
              "/(matr)ices$/i",
              "@value"
            ],
            "operations":"(replace '/(matr)ices$/i' '$1ix' @value)",
            "operations_expression":[
              "replace",
              "/(matr)ices$/i",
              "$1ix",
              "@value"
            ]
          },
          {
            "id":26082,
            "conditions":"(match '/(quiz)zes$/i' @value)",
            "conditions_expression":[
              "match",
              "/(quiz)zes$/i",
              "@value"
            ],
            "operations":"(replace '/(quiz)zes$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/(quiz)zes$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26083,
            "conditions":"(match '/(us)es$/i' @value)",
            "conditions_expression":[
              "match",
              "/(us)es$/i",
              "@value"
            ],
            "operations":"(replace '/(us)es$/i' '$1' @value)",
            "operations_expression":[
              "replace",
              "/(us)es$/i",
              "$1",
              "@value"
            ]
          },
          {
            "id":26084,
            "conditions":"(match '/s$/i' @value)",
            "conditions_expression":[
              "match",
              "/s$/i",
              "@value"
            ],
            "operations":"(replace '/s$/i' '' @value)",
            "operations_expression":[
              "replace",
              "/s$/i",
              "",
              "@value"
            ]
          }
        ]
      },
      "times":{
        "id":1862,
        "keyword":"times",
        "latin_name":"Iteration",
        "description":"The iteration form of the cardinal numbers",
        "application":"phrase",
        "rules":[
          {
            "id":26085,
            "description":"replace '1' with 'once'",
            "conditions":"(= 1 @value)",
            "conditions_expression":[
              "=",
              1,
              "@value"
            ],
            "operations":"(replace '1' 'once' @value)",
            "operations_expression":[
              "replace",
              "1",
              "once",
              "@value"
            ]
          },
          {
            "id":26086,
            "description":"replace '2' with 'twice'",
            "conditions":"(= 2 @value)",
            "conditions_expression":[
              "=",
              2,
              "@value"
            ],
            "operations":"(replace '2' 'twice' @value)",
            "operations_expression":[
              "replace",
              "2",
              "twice",
              "@value"
            ]
          },
          {
            "id":26087,
            "description":"in all other cases, append x times",
            "conditions":"(true)",
            "conditions_expression":[
              "true"
            ],
            "operations":"(append ' times' @value)",
            "operations_expression":[
              "append",
              " times",
              "@value"
            ]
          }
        ]
      }
    }
  };
});
