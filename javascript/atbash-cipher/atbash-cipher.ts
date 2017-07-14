function encode(word = ''): string {
    const toEncode = word.toLowerCase().replace(/[^a-z0-9]+/g, '').split('');
    const encoded = toEncode.map(l => /\d/.test(l) ? l : String.fromCharCode(122 - (l.charCodeAt(0) - 97)));

    let count = 0;
    let cipher = '';

    for (var i = 0; i < encoded.length; i++) {
        cipher += encoded[i];
        count++;

        if (count === 5) {
            cipher += ' ';
            count = 0;
        }
    }
    return cipher.trim();
}

export = {
    encode
}