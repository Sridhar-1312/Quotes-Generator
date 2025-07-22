

const getquote = async () => {
        document.querySelector(".quote-app blockquote").innerHTML = "loading....";
    document.querySelector(".quote-app span").innerHTML = "loading...";
    const instruction = await fetch("https://dummyjson.com/quotes/random")
    const data = await instruction.json();
    // console.log(data);

    document.querySelector(".quote-app blockquote").innerHTML = data.quote;
    document.querySelector(".quote-app span").innerHTML = data.author;

}
getquote();