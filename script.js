

// const getquote = async () => {
//         document.querySelector(".quote-app blockquote").innerHTML = "loading....";
//     document.querySelector(".quote-app span").innerHTML = "loading...";
//     const instruction = await fetch("https://dummyjson.com/quotes/random")
//     const data = await instruction.json();
//     // console.log(data);

//     document.querySelector(".quote-app blockquote").innerHTML = data.quote;
//     document.querySelector(".quote-app span").innerHTML = data.author;

// }
// getquote();


let TweetData;
const getquote = async () => {
    const content = await fetch("https://dummyjson.com/quotes/random").then((e) => e.json())
    document.querySelector(".quote-app blockquote").innerHTML = content.quote;
    document.querySelector(".quote-app span").innerHTML = content.author;
    TweetData = content;
}
getquote();

const share = () => {
    window.open("https://twitter.com/intent/tweet?text=" +`${TweetData.quote}`+ "-----by  " + `${TweetData.author}`, "width=600, height=300")
}

 