var validator = require('jsonschema').Validator;
var v = new validator();

var headerSchema = {
  "id" : "Header",
  "type": "object",
  "properties": {
    "to": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "uniqueItems": true,
      "minItems": 1
    },
    "category": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "uniqueItems": true,
      "minItems": 1
    },
    "section": {
      "type": "object",
      "patternProperties": {
        ".+": {
          "type": "string"
        }
      }
    },
    "sub": {
      "type": "object",
      "patternProperties": {
        ".+": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "uniqueItems": true,
          "minItems": 1
        }
      }
    },
    "unique_args": {
      "type": "object",
      "patternProperties": {
        ".+": {
          "type": "string"
        }
      }
    },
    "filters": {
      "type": "object",
      "patternProperties": {
        ".+": {
          "type": "object",
          "properties": {
            "settings": {
              "required": true,
              "type": "object",
              "patternProperties": {
                ".+": {
                  "type": ["string", "number"]
                }
              }
            }
          }
        }
      }
    }
  }
};

var smtpapiValidator = function (header) {
  return v.validate(header, headerSchema).errors;
};

module.exports = exports = smtpapiValidator;
