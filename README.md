# Generatore di Previsioni Meteo

Questa applicazione permette di visualizzare le previsioni meteo in tempo reale per una città fornita dall'utente. L'applicazione utilizza l'API di [WeatherAPI](https://www.weatherapi.com/) per ottenere i dati meteo e visualizzare l'icona e la descrizione delle condizioni meteorologiche.

## Tecnologie Utilizzate

- **React**: Per la creazione dell'interfaccia utente.
- **Axios**: Per effettuare le richieste HTTP all'API.
- **Bootstrap**: Per lo styling dell'interfaccia utente.
- **Lodash (debounce)**: Per limitare le chiamate API durante la digitazione dell'utente (evitando chiamate troppo frequenti).
- **WeatherAPI**: Fornisce i dati meteo in tempo reale.

## Funzionalità

- L'utente può digitare una città e visualizzare le previsioni meteo correnti per quella città.
- La richiesta viene inviata solo dopo una breve pausa (debounce di 1 secondo) per ridurre il numero di chiamate API durante la digitazione.
- Se l'utente non inserisce nulla o se la città non esiste, l'app non invierà alcuna richiesta.
- Mostra un'icona che rappresenta le condizioni meteorologiche e un testo descrittivo (ad esempio: "Soleggiato", "Nuvoloso", etc.)

## Installazione

Per eseguire il progetto localmente, segui questi passi:

1. Clona il repository:

   ```bash
   git clone https://github.com/corgab/weather-application.git
   ```

2. Vai nella cartella del progetto:

   ```bash
   cd weather-application
   ```

3. Installa le dipendenze:

   ```bash
   npm install
   ```

4. Crea un file `.env` nella radice del progetto e aggiungi la tua chiave API di [WeatherAPI](https://www.weatherapi.com/):

   ```
   VITE_WEATHER_KEY=la_tua_chiave_api
   ```

5. Avvia il progetto:

   ```bash
   npm run dev
   ```

6. Apri il tuo browser e vai su `http://localhost:5173`.

## Struttura del Progetto

```
/src
  /components
    Weather.js      // Componente per visualizzare le informazioni meteo
    Search.js       // Componente per la barra di ricerca della città
  App.js            // Componente principale
  assets/
    search.svg      // Icona per la ricerca
```

## Come Funziona

- **Search Component**:
  Un campo di input per inserire il nome della città. Ogni volta che l'utente scrive qualcosa, viene invocato un handler che aggiorna lo stato della città e invia una richiesta HTTP per ottenere i dati meteo.

- **App Component**:
  Gestisce lo stato di `city`, `weatherIcon`, `weatherText`, e `loading`. Usa l'API `WeatherAPI` per recuperare i dati meteo e li passa al componente `Weather`.

- **Weather Component**:
  Mostra l'icona del meteo e una descrizione testuale delle condizioni meteo (ad esempio: "Nuvoloso", "Pioggia", "Soleggiato", ecc.).

## Personalizzazioni

- È possibile espandere l'applicazione per includere più dettagli sulle previsioni meteo, come temperatura, umidità, velocità del vento, ecc.
