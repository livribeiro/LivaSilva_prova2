(function() {
    var inputs = [].map.call(document.querySelectorAll('table tr input[type="number"]'), function(input) {
        input.addEventListener('change', calcula);
        return input;
    });

    function calcula() {
        var soma = inputs.reduce(function(soma, input) {
            var nr = parseInt(input.value) || 0;
            return soma + nr;
        }, 0);
        document.getElementById("A5").value = soma;
    }
})();