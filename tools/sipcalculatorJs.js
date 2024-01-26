function calculateNutrient() {
        var ppm = document.getElementById('ppm-input').value;
        var depthIncrement = document.getElementById('depth-input').value;

        if (ppm && depthIncrement) {
            var result = ppm * 0.3 * depthIncrement;
            document.getElementById('result').innerHTML = 'Mosaic Nutrient: ' + result.toFixed(2) + ' lb/acre';
        } else {
            document.getElementById('result').innerHTML = 'Please enter valid values for PPM and Depth Increment.';
        }
    }
