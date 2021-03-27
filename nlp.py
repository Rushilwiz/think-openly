

import json
import pandas as pd
import nltk
import numpy as np
from nltk.stem.porter import *
from nltk.stem import WordNetLemmatizer, SnowballStemmer
from gensim.parsing.preprocessing import STOPWORDS
from gensim.utils import simple_preprocess
import gensim


from sklearn.datasets import fetch_20newsgroups
newsgroups_train = fetch_20newsgroups(subset='train', shuffle=True)
newsgroups_test = fetch_20newsgroups(subset='test', shuffle=True)

np.random.seed(400)


stemmer = SnowballStemmer("english")

# context = ssl._create_unverified_context()


def get_data():
    pass


def lemmatize_stemming(text):
    # Tokenize and lemmatize
    return stemmer.stem(WordNetLemmatizer().lemmatize(text, pos='v'))


def preprocess(text):
    result = []
    for token in gensim.utils.simple_preprocess(text):
        if token not in gensim.parsing.preprocessing.STOPWORDS and len(token) > 3:
            result.append(lemmatize_stemming(token))

    return result


def categorize_str(s: str) -> int:
    """
    Takes in a string to determine which topic it belongs to
    Returns the topic number as an int
    """
    bow_vector = dictionary.doc2bow(preprocess(s))
    ldaResults = sorted(lda_model[bow_vector], key=lambda tup: -1*tup[1])
    return ldaResults[0][0]


def create_model(documents: list):
    """
    Takes a list of strings to create model
    returns the lda model and dictionary
    """
    processed_docs = []
    for doc in newsgroups_train.data:
        processed_docs.append(preprocess(doc))
    dictionary = gensim.corpora.Dictionary(processed_docs)
    bow_corpus = [dictionary.doc2bow(doc) for doc in processed_docs]
    lda_model = gensim.models.LdaMulticore(bow_corpus,
                                           num_topics=7,
                                           id2word=dictionary,
                                           passes=10,
                                           workers=2)
    return(lda_model, dictionary)


lda_model, dictionary = create_model(newsgroups_train.data)
for idx, topic in lda_model.show_topics(formatted=False, num_words=30):
    print('Topic: {} \nWords: {}'.format(idx, [w[0] for w in topic]))

for ind in range(len(newsgroups_test)):
    unseenDoc = newsgroups_test.data[ind]
    print(ind, categorize_str(unseenDoc))
