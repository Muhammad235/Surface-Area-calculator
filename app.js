function getOption() {
    selectElement = document.querySelector('#measure');
    output = selectElement.value;

    radius = document.getElementById('radius').value;

    surfaceArea = `${4 * 3.14 * radius * radius}`;

    document.querySelector('.output').textContent = surfaceArea;

    document.querySelector('.parameter').textContent = output;

    console.log(surfaceArea);

}

function coneSurface() {
    selectElement1 = document.querySelector('#cone-measure1');
    selectElement2 = document.querySelector('#cone-measure2');

    param1 = selectElement1.value;

    param2 = selectElement2.value;

    Baseradius = document.getElementById('base-radius').value;

    Height = document.getElementById('height').value;


    // base surface area

    BaseSurfaceArea = `${3.14 * Baseradius * Baseradius}`;

    document.querySelector('.BSA').textContent = BaseSurfaceArea;

    document.querySelector('.parameter1').textContent = param1;


    // Lateral surface area

    
    LateralSurfaceArea = `${3.14 * Baseradius * Math.sqrt(Baseradius * Baseradius +  Height * Height)}`;

    document.querySelector('.LSA').textContent = LateralSurfaceArea;

    document.querySelector('.parameter2').textContent = param2;


}


function cubeSurface() {
    selectElement = document.querySelector('#cube-meausure');
    output = selectElement.value;

    Length = document.getElementById('length').value;

    cubeSurfaceArea = `${6 * Length * Length}`;

    document.querySelector('.cube-output').textContent = cubeSurfaceArea;

    document.querySelector('.cube-parameter').textContent = output;

    console.log(surfaceArea);

}
