let qrScanner = null;

window.onload = async ()=>{

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
                qrbox:300
            },

            async codigo => {

                if(
                    window.opener
                ){

                    window.opener
                    .postMessage(
                        {
                            tipo:'QR',
                            codigo
                        },
                        '*'
                    );

                }

                await qrScanner.stop();

                window.close();

            },

            ()=>{}

        );

    }catch(error){

        console.error(
            error
        );

        alert(
            "No se pudo abrir la cámara"
        );

    }

};
