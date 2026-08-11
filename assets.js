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

if(window.opener){

    window.opener.postMessage(
        {
            tipo:"QR",
            codigo:codigo
        },
        "*"
    );

}

window.close();

                window.addEventListener(

    "message",

    e=>{

        if(
            !e.data ||
            e.data.tipo !== "QR"
        ){
            return;
        }

        const codigo =
            String(
                e.data.codigo || ""
            )
            .trim()
            .toUpperCase();

        app.toggleSearchBar();

        document
            .getElementById(
                "search-input"
            )
            .value =
                codigo;

        inventory.buscar(
            codigo
        );

    }

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
