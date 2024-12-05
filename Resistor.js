       function calculateresistance() {
    const firstBandValue = parseInt(document.getElementById("first-band").value);
    const secondBandValue = parseInt(document.getElementById("second-band").value);
    const multiplierBandValue = parseInt(document.getElementById("multiplier-band").value);
    const toleranceBandValue = parseFloat(document.getElementById("tolerance-band").value);

    document.getElementById("band1").style.backgroundColor = getBandColor(firstBandValue);
    document.getElementById("band2").style.backgroundColor = getBandColor(secondBandValue);
    document.getElementById("band3").style.backgroundColor = getBandColor(Math.log10(multiplierBandValue)); 
    document.getElementById("band4").style.backgroundColor = document.getElementById("tolerance-band").selectedOptions[0].dataset.color;

    const resistance = (firstBandValue * 10 + secondBandValue);

    let multiplierPower = Math.log10(multiplierBandValue);

    document.getElementById("result").innerText = `resistance: ${resistance}X10^${multiplierPower}ohm ±${toleranceBandValue}% `;
}



function getToleranceColor(value) {
    switch (value) {
        case 1: return "#964B00"; // Brown
        case 2: return "#FFA500"; // Red
        case 5: return "#008000"; // Green
        case 10: return "#808080"; // Gray
        default: return "#000000";
    }
}


        function getBandColor(value) {
            switch (value) {
                case 0: return "#000000"; // Black
                case 1: return "#964B00"; // Brown
                case 2: return "#FF0000"; // Red
                case 3: return "#FFA500"; // Orange
                case 4: return "#FFFF00"; // Yellow
                case 5: return "#008000"; // Green
                case 6: return "#0000FF"; // Blue
                case 7: return "#7F00FF"; // Violet
                case 8: return "#808080"; // Gray
                case 9: return "#FFFFFF"; // White
                default: return "#000000"; // Default to black
            }
        }