/// <reference path="Ang.js" />

app.factory('CustomService', function () {
    return {
        ProcessString: function (input) {
            if (!input) {
                return input;
            }
            var output = "";
            var len = input.length;
            
            for (i = 0; i < input.length; i++)
            {
                if (i > 0 && input[i] == input[i].toUpperCase) {
                    output = output + "   ";
                }
                output = output + input[i];
            }
            return output;
        }
    };

});