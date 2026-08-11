let qrScanner = null;

async function iniciarQR(){

    if(qrScanner){

        return;

    }

    qrScanner =
        new Html5Qrcode(
            "qr-reader"
        );

    try{

        await qrScanner.start(

            {
                facingMode:
                    "environment"
            },

            {
                fps:10,
                qrbox:250
            },

            async codigo=>{

                alert(
                    "QR detectado:\n\n" +
                    codigo
                );

                await qrScanner.stop();

                qrScanner = null;

                document
                    .getElementById(
                        "qr-reader"
                    )
                    .innerHTML = "";

            },

            ()=>{}

        );

    }catch(error){

        console.error(error);

        alert(
            error.message
        );

        qrScanner = null;

    }

}
