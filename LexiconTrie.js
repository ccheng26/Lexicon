class TrieNode {
    constructor() {
        this.edges = new Map();
        this.wordEnded = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add_word(string) {
        let currentNode = this.root;
        for (let char in string) {
            if (!currentNode.edges.has(char)) {
                currentNode.edges.set(char, new TrieNode());
            }
            currentNode = currentNode.edges.get(char);
        }

        currentNode.wordEnded = true;
    }

    is_word(string) {
        let currentNode = this.root;
        for (let char in string) {
            if (!currentNode.edges.has(char)) {
                return false;
            }
            currentNode = currentNode.edges.get(char);
        }

        return currentNode.wordEnded;
    }

    is_prefix(string) {
        let currentNode = this.root;
        for (let char in string) {
            if (!currentNode.edges.has(char)) {
                return false;
            }
            currentNode = currentNode.edges.get(char);
        }

        return true;
    }
}

let lexicon = new Trie()
lexicon.add_word('thisone')
lexicon.add_word('jetlag')
lexicon.add_word('here')
console.log(lexicon.container)
console.log(lexicon.is_word('this'))
console.log(lexicon.is_word('thisone'))
console.log(lexicon.is_prefix('this'))
console.log(lexicon.is_word('sl'))
