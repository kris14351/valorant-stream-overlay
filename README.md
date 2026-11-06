# Valorant Stream Overlay

Czerwono-czarny overlay do OBS jako Browser Source.

## Publikacja przez GitHub Pages
1. Otwórz repozytorium `valorant-stream-overlay`.
2. Kliknij **Add file → Upload files**.
3. Wgraj `index.html`, `style.css` i `script.js` (oraz ten README).
4. Zatwierdź przyciskiem **Commit changes**.
5. Wejdź w **Settings → Pages**.
6. W sekcji Build and deployment wybierz **Deploy from a branch**.
7. Wybierz branch `main` i folder `/ (root)`, a następnie **Save**.
8. Po opublikowaniu GitHub pokaże adres strony. Wklej go w OBS jako **Browser Source**.

## Statystyki
Otwórz `script.js` i edytuj wartości w obiekcie `stats`:
- `rank` – nazwa rangi
- `rr` – punkty RR
- `wins` – wygrane w bieżącym streamie
- `losses` – przegrane w bieżącym streamie
- `kd` – ogólne K/D z Valoranta

WR oblicza się automatycznie na podstawie W i L. Po rozpoczęciu nowego streamu ustaw `wins` i `losses` na `0`.

## Ważne
Ta wersja nie pobiera automatycznie wyników z Riot. Do automatycznych aktualizacji potrzebne jest osobne, autoryzowane źródło danych.
