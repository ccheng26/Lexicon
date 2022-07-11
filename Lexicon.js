class Lexicon {
    constructor() {
        this.container = []
        this.maxWordLength = 0
        this.validWords = []
    }

    add_word(string) {
        // populate the lexicon and add new words as needed
        this.container.push(string.split(''))
        if (string.length > this.maxWordLength) {
            this.maxWordLength = string.length
        }
        this.genWordList()
    }

    is_word(string) {
        // returns true if input exist in lexicon
        // if string length is null/longer than longest word

        if (!string || string.length > this.maxWordLength) {
            return false;
        }

        return !!this.validWords.filter(word => word === string).length
    }

    is_prefix(string) {
        // returns True if input is the prefix of any word in the lexicon,
        // order matters, partial match
        
        let flag = false
        this.validWords.forEach((word) => {
            // Check if the first word is prefix
            if (word.indexOf(string) === 0) {
                flag = true;
            }
        });

        return flag
    }

    genWordList() { // O(n^2)
        const wordList = this.container.map(word => word.join(''))
        
        for (let i = 0; i < this.maxWordLength; i++) {
            let word = ''
            for (let j = 0; j < this.maxWordLength; j++) {
                if (this.container[j] && this.container[j][i]) {
                    word += this.container[j][i]
                }
            }
            wordList.push(word);
        }
        
        this.validWords = wordList
        return wordList
    }
}

let lexicon = new Lexicon()
lexicon.add_word('thisone')
lexicon.add_word('jetlag')
lexicon.add_word('her')
console.log(lexicon.container)
console.log(lexicon.is_word('this'))
console.log(lexicon.is_word('thisone'))
console.log(lexicon.is_prefix('this'))
console.log(lexicon.is_word('sl'))
