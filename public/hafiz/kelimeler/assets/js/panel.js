function setRange(start, end) {
    document.getElementById('start').value = start;
    document.getElementById('end').value = end;
}

function viewValues() {
    const startValue = document.getElementById('start').value;
    const endValue = document.getElementById('end').value;

    // If start value is greater than end value, alert the user
    if (startValue > endValue) {
        alert('Başlangıç değeri bitiş değerinden büyük olamaz!');
        return;
    }

    // Redirect to the viewer page with the selected range
    // viewer.html?id=1-10 like this.
    window.location.href = `viewer.html?id=${startValue}-${endValue}`;
    
    //document.getElementById('output').innerText = `Seçilen aralık: ${startValue} - ${endValue}`;
}
