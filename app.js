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


    // Total surface area

    TotalSurfaceArea = `${((BaseSurfaceArea + LateralSurfaceArea))}`;


    document.querySelector('.TSA').textContent = TotalSurfaceArea;

    document.querySelector('.parameter3').textContent = param2;


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




function CylindricalTankSurface() {
    selectElement1 = document.querySelector('#cone-measure1');
    selectElement2 = document.querySelector('#cone-measure2');

    param1 = selectElement1.value;

    param2 = selectElement2.value;

    Baseradius = document.getElementById('top-base-radius').value;

    Height = document.getElementById('cylin-height').value;

    // Total surface area

    TotalSurfaceArea = `${ 3.14 * Baseradius * Baseradius}`;

    document.querySelector('.TopSA').textContent = TotalSurfaceArea;
    
    document.querySelector('.Top-param').textContent = param1;



    // base surface area
    BottomSurfaceArea = `${ 3.14 * Baseradius * Baseradius}`;

    document.querySelector('.BottomSA').textContent = BottomSurfaceArea;
    
    document.querySelector('.Bottom-param').textContent = param2;


    // Lateral surface area

    LateralSurfaceArea = `${2 * 3.14 * Baseradius * Height}`;

    document.querySelector('.LateralSA').textContent = LateralSurfaceArea;

    document.querySelector('.Lateral-param').textContent = param2;


    // Total surface area

    TotalSurfaceArea = Number(TotalSurfaceArea + BottomSurfaceArea + LateralSurfaceArea);

    document.querySelector('.LateralSA').textContent = TotalSurfaceArea;

    document.querySelector('.Lateral-param').textContent = param2;

}


function RecTankSurface() {
    selectElement = document.querySelector('#tank-measure1');

    param_type = selectElement.value;

    Length = document.getElementById('tank-length').value;

    width = document.getElementById('tank-width').value;

    Height = document.getElementById('tank-height').value;

    TankSurfaceArea = `${2 *(Length * width + Length * Height + width * Height)}`;

    document.querySelector('.TankSA').textContent = TankSurfaceArea;

    document.querySelector('.Tank-param').textContent = param_type;



}
