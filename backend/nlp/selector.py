import nlp
import random

# get user preference from database (i.e. how many times they clicked on some certain type of article)
# prob = [1/nlp.NUM_TOPICS for i in range(nlp.NUM_TOPICS)]
# manipulate prob based on user preference


def get_topics(weights, num_reccomendations):
    """
    Takes in weights as list/tuple, ex: (0.1, 0.2, 0.3)
    Returns a list of topics
    """
    return random.choices([*range(nlp.NUM_TOPICS)], weights, k=num_reccomendations)
