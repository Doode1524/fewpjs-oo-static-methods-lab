class Formatter {
    //add static methods here
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9- ']+/g, '')
    }

    static titleize(string) {
        let split = string.split(" ")
        let words = []
        let articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

        for (let i = 0; i < split.length; i++) {
            if (articles.includes(split[i])) {
                words.push(split[i])
            } else {
                words.push(this.capitalize(split[i]))
            }
        }
        return this.capitalize(words.join(" "))
    }
}