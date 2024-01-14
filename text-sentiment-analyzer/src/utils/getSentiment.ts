import { SentimentAnalyzer, PorterStemmer, WordTokenizer } from 'natural';
import { removeStopwords } from "stopword";

export function getSentiment(text: string) {

    const alphaOnlyReview = text.replace(/[^a-zA-Z\s]+/g, '');

    const tokenizer = new WordTokenizer();
    const tokenizedText= tokenizer.tokenize(alphaOnlyReview);
    const filteredText = removeStopwords(tokenizedText);

    const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
    return analyzer.getSentiment(filteredText);
}