const API_URL =
    "https://script.google.com/macros/s/AKfycbycmn3mcgeVP3TqbpVU79udt_m3j-lCm6bN8ac-KgzZLnK7gSPzXRyABTUemKJ2l65X/exec";

async function probar(){

    try{

        const r =
            await fetch(
                API_URL,
                {
                    method:"POST",

                    headers:{
                        "Content-Type":
                            "application/json"
                    },

                    body:JSON.stringify({

                        action:
                            "getData",

                        payload:{}

                    })

                }
            );

        const data =
            await r.json();

        console.log(data);

        document
            .getElementById(
                "out"
            )
            .textContent =
                JSON.stringify(
                    data,
                    null,
                    2
                );

    }catch(error){

        console.error(
            error
        );

    }

}
