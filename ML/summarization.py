# Imports:
import nltk
import re
import heapq

# Opening text file with the terms and conditions:
file = open("terms.txt", "r", encoding="utf-8")
text = str(file.read())

# Function to process input text:
def summarize(text: str, num_sentences: int = 10, min_sentence_length: int = 30) -> str:
    """Function to generate summary for input text

    Args:
        text (str): The text to be summarized
        num_sentences (int, optional): The number of sentences wanted in the summary. Defaults to 10.
		min_sentence_length (int, optional): The minimum number of characters in a sentence for it to be included. Defaults to 30.

    Returns:
        str: The summarized text
    """
    
    # Removing Extra Spaces
    article_text = re.sub(r'\s+', ' ', text)
    
    # Removing special characters and digits
    formatted_article_text = re.sub('[^a-zA-Z]', ' ', article_text )
    formatted_article_text = re.sub(r'\s+', ' ', formatted_article_text)
    
    # Splitting text into seperate sentences
    sentence_list = nltk.sent_tokenize(article_text)
    
    stopwords = nltk.corpus.stopwords.words('english')

    word_frequencies = {}
    for word in nltk.word_tokenize(formatted_article_text):
        if word not in stopwords:
            if word not in word_frequencies.keys():
                word_frequencies[word] = 1
            else:
                word_frequencies[word] += 1
    
    maximum_frequncy = max(word_frequencies.values())

    for word in word_frequencies.keys():
        word_frequencies[word] = (word_frequencies[word]/maximum_frequncy)
    
    sentence_scores = {}
    for sent in sentence_list:
        for word in nltk.word_tokenize(sent.lower()):
            if word in word_frequencies.keys():
                if len(sent.split(' ')) < min_sentence_length:
                    if sent not in sentence_scores.keys():
                        sentence_scores[sent] = word_frequencies[word]
                    else:
                        sentence_scores[sent] += word_frequencies[word]
    
    summary_sentences = heapq.nlargest(num_sentences, sentence_scores, key=sentence_scores.get)

    summary = ' '.join(summary_sentences)
    return summary

text_file = open("finalproduct.txt", "w")

def print_points(summary_text):
    result = ""
    sentences = nltk.sent_tokenize(summary_text)
    for sentence in sentences:
        result+="\n -"+sentence
    print(result) #result is the final product, export to text file
    return result

x = summarize(text, num_sentences=8)
text_file.write(print_points(x))
text_file.close()