
function hello() {
    console.log("Hello World");
}

$.get("https://dog.ceo/api/breeds/list/all", function(data,status) {
    console.log(data.message);
});

$.ajax({
    url: `https://dog.ceo/api/breed/${breed}/images`,
    onSuccess: function(result){
        console.log("Success");
        },
    contentType: "application/json",
    dataType: 'json'
});

hello();