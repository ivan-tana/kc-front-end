



let who_are_we = ''
let who_are_we_summary = ''
fetch('http://kingdomculture.herokuapp.com/api/about%20kc')
    .then(res => res.json())
    .then(data => 
        {
            who_are_we = conver_to_html(data['who are we'])
            who_are_we_summary = conver_to_html(data['who are we summary'])

            change_text('hero_text', who_are_we_summary)
            change_text('who_are_we', who_are_we )
        })





function change_text(id, text)
{
    element = document.querySelector('#' + id)
    element.innerHTML = text
}


function conver_to_html(data)
{
    let result = ''
    for(i =0; i < data.length; i++)
    {
        if(data[i].type == 'paragraph')
        {
            result += paragraph(data[i].data.text)
        }
        if(data[i].type == 'header')
        {
            result += header(data[i].data.text, data[i].data.level)
        }
    }
    return result
}

function paragraph(data)
{
    return '<p>' + data + '</p>'
}

function header(data, level){return '<h'+ level + '>' + data + '</h' + level + '>'  }