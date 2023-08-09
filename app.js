let cad1 = `
<h2 class="titulo">Noticias actualizadas</h2>
<br><br>

<div class="containerNovedades">
`;

for (let elemento of data) {
    cad1 += `
        <div class="card">
            <img src="${elemento.image_url}">
            <div class="card-img">
                <h2>${elemento.title}</h2>
                <h3>${elemento.pubDate}</h3>
                <ul>
                    <li>${elemento.source_id}</li>
                    <li>${elemento.creator}</li>
                    <li>${elemento.country}</li>
                </ul>
            </div>
        </div>
    `;
}

cad1 += `
</div>
`;

// Now you can use the 'cad1' HTML string to update the content on your webpage