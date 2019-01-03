export const soundLoader = function(sources, callback) {
    const sounds = {};
    let loadedSounds = 0;
    let numSounds = 0;
    for(let src in sources) {
        numSounds++;
    }
    for(let src in sources) {
        sounds[src] = new Audio();
        sounds[src].onload = function() {
            if(++loadedSounds >= numSounds && callback) {
                callback(sounds);
            }
        };
        sounds[src].src = sources[src];
    }
    return sounds;
}
