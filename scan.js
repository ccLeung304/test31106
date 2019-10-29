 function checkQR() {
            return $("#txtScannedQR").val() != "";
        }
 
 
        var scanner = new Instascan.Scanner(
            {
                video: document.getElementById('preview') 
            });
        scanner.addListener('scan', function (content) {
            $("#txtScannedQR").val(content);
            alert(content);
            
        });
        Instascan.Camera.getCameras().then(function (cameras) {
            
            // on mobile pick the rear camera
            if (cameras.length > 1) {
                scanner.start(cameras[1]);
            }
            else if (cameras.length > 0) {
                scanner.start(cameras[0]);
            } else {
                console.error('No cameras found.');
            }
        }).catch(function (e) {
            console.error(e);
        });