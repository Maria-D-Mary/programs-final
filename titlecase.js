var title = ("My name is Maria");

str = title.split(" ");

for (var i = 0, x = str.length; i < x; i++) 
{
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
}

console.log(str.join(" "));