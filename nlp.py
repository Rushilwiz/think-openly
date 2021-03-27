import pandas as pd
import nltk
import numpy as np
from nltk.stem.porter import *
from nltk.stem import WordNetLemmatizer, SnowballStemmer
from gensim.parsing.preprocessing import STOPWORDS
from gensim.utils import simple_preprocess
import gensim
from sklearn.datasets import fetch_20newsgroups

newsgroups_train = fetch_20newsgroups(subset='train')
newsgroups_test = fetch_20newsgroups(subset='test')

np.random.seed(400)
stemmer = SnowballStemmer("english")
NUM_TOPICS = 7


def lemmatize_stemming(text):
    # Tokenize and lemmatize
    return stemmer.stem(WordNetLemmatizer().lemmatize(text, pos='v'))


def preprocess(text):
    result = []
    for token in gensim.utils.simple_preprocess(text):
        if token not in gensim.parsing.preprocessing.STOPWORDS and len(token) > 3:
            result.append(lemmatize_stemming(token))

    return result


def categorize_str(s: str, lda_model) -> int:
    """
    Takes in a string to determine which topic it belongs to
    Returns the topic number as an int
    """
    processed_doc = preprocess(s)
    dictionary = gensim.corpora.Dictionary([processed_doc])
    bow_vector = dictionary.doc2bow(preprocess(s))
    ldaResults = sorted(lda_model[bow_vector], key=lambda tup: -1*tup[1])
    return ldaResults[0][0]


def create_model(documents: list):
    """
    Takes a list of strings to create model
    returns the lda model
    """
    processed_docs = []
    for doc in documents:
        processed_docs.append(preprocess(doc))
    dictionary = gensim.corpora.Dictionary(processed_docs)
    bow_corpus = [dictionary.doc2bow(doc) for doc in processed_docs]
    lda_model = gensim.models.LdaMulticore(bow_corpus,
                                           num_topics=NUM_TOPICS,
                                           id2word=dictionary,
                                           passes=10,
                                           workers=2)
    return lda_model


def update_model(s: str, lda_model):
    """
    Takes in a string to update model
    Trains model using string
    """
    processed_doc = preprocess(s)
    dictionary = gensim.corpora.Dictionary([processed_doc])
    bow_corpus = [dictionary.doc2bow(processed_doc)]
    lda_model.update(bow_corpus)


# lda_model = create_model(newsgroups_train.data)
# update_model("Hello everyone", lda_model)
# print(categorize_str("Hello world", lda_model))
