document.addEventListener('DOMContentLoaded', () => {
    const filmer = [
        
    ];

    const filmerListe = document.getElementById('filmer');

    filmer.forEach(film => {
        const li = document.createElement('li');
        li.textContent = `${film.navn} - Kommer ut ${film.dato}`;
        filmerListe.appendChild(li);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8b125010d405bc63482c80733c9f8e91';  // Erstatt med din faktiske API-nøkkel
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=no-NO&page=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const filmer = data.results;
            const filmerListe = document.getElementById('filmer');

            filmer.forEach(film => {
                const li = document.createElement('li');
                li.textContent = `${film.title} - Kommer ut ${film.release_date}`;
                filmerListe.appendChild(li);
            });
        })
        .catch(error => console.error('Feil ved henting av data:', error));
    });
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8b125010d405bc63482c80733c9f8e91'; 
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=no-NO&page=1`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const filmer = data.results;
        const filmerListe = document.getElementById('filmer');

        filmer.forEach(film => {
            // Lag et nytt listeelement for hver film
            const li = document.createElement('li');
            li.classList.add('film-item');

            // Lag et bildeelement og sett det til filmens plakat
            const img = document.createElement('img');
            img.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`; // Henter filmens plakat
            img.alt = film.title;

            // Legg til bilde i listen
            li.appendChild(img);

            // Legg til tekst med filmens tittel og dato
            const tekst = document.createElement('p');
            tekst.textContent = `${film.title} - Kommer ut ${film.release_date}`;
            li.appendChild(tekst);

            // Legg hele listen til filmen i DOM-en
            filmerListe.appendChild(li);
        });
    })
    .catch(error => console.error('Feil ved henting av data:', error));
});