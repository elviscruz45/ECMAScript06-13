const regex=/\b(Apple)+\b/g;

const fruit="oAppleo,Banana Kiwi, Apple, Orange,etc. etc. etc."

for (const match of fruit.matchAll(regex)){
    console.log(match)
}