(
    function chai () {
        // name iife
        console.log(`DB connected`);
    }
) ();

(
    (name) => {
        console.log(`DB connectedTwo ${name}`);
    }
)("hapani")