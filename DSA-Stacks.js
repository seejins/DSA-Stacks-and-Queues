class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null) 
            return this.top
        }

        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }

    display() {
        let node = this.top
        while(node !== null) {
            console.log(node.data)
            node = node.next
        }
    }

    peek() {
        if(this.top !== null) {
            return this.top.data
        }
    }

    isEmpty() {
        if(this.top === null) {
            return true
        } else {
            return false
        }
    }

    
}


function main() {
    let starTrek = new Stack()

    starTrek.push("Kirk")
    starTrek.push("Spock")
    starTrek.push("McCoy")
    starTrek.push("Scotty")
    starTrek.display()

    starTrek.pop()
    starTrek.pop()
    starTrek.display()


}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let wordToCheck = new Stack()
    let word = new Stack()

    for(let i = 0; i <= s.length; i++) {
        word.push(s.charAt(i))
    }

    for(let i = s.length-1; i < 0; i--) {
        wordToCheck.push(s.charAt(i))
    }

    f

    if(word === wordToCheck) {
        return "is a palindrome"

    } else {
        return "is not a palindrome"
    }

    
}



main()
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));