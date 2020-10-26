const PROJECTS = [{
        "id": 0,
        "caption": "SAT vs ACT Analysis",
        "subcaption": "Comparison of SAT and ACT scores between years 2017 & 2018",
        "tech": {
            "viz": ["Matplotlib", "Seaborn"],
            "packages": ["Pandas", "NumPy"]
        },

        "descriptions": [
            "Sought to understand the differences and trends of both SAT and ACT status quo and make recommendations to improve SAT participation of states with lower rates",
            "Completed on Jupyter Notebook with Python"
        ],
        "githubUrl": "https://github.com/fadhilaffandi/dsiprojects/tree/master/project_1",
        "imageUrl": "img/team/2.jpg"
    },
    {
        "id": 1,
        "caption": "Ames Housing Predictions",
        "subcaption": "subcaption!",
        "tech": {
            "model": ["Simple Linear Regressions", "Ridge", "Lasso"],
            "viz": ["Matplotlib", "Seaborn"],
            "packages": ["Scikit-Learn", "SciPy", "Pandas", "NumPy"]
        },
        "descriptions": [
            "Predictions generated through comparing Ridge, Lasso and Simple Linear Regressions",
            "Data set of 81 columns and about 2000 rows of data",
            "Accuracy of about 82%",
            "Completed on Jupyter Notebook with Python"
        ],
        "githubUrl": "https://github.com/fadhilaffandi/dsiprojects/tree/master/project_2",
        "imageUrl": "img/team/2.jpg"
    },
    {
        "id": 2,
        "caption": "Subreddit Classifier",
        "subcaption": "Classify two subreddits by selecting the more efficient one after comparing the efficacy and limitations of two classification models",
        "tech": {
            "model": ["Naïve Bayes", "Logistic Regression", "Binary classification"],
            "viz": ["Matplotlib"],
            "packages": ["Scikit-Learn", "NLTK", "Pandas", "NumPy"]
        },

        "descriptions": [
            "Binary classification model comparing Naïve Bayes and Logistic Regression",
            "Accuracy of about 95% and ROC score of 0.995",
            "Dataset of a total of 2000 posts from 2 different subreddits",
            "Created a corpus using Regex for data cleaning and NLTK for preprocessing",
            "Completed on Jupyter Notebook with Python",
        ],
        "githubUrl": "https://github.com/fadhilaffandi/dsiprojects/tree/master/project_3",
        "imageUrl": "img/team/2.jpg"
    },
    {
        "id": 3,
        "caption": "West Nile Virus Predictions",
        "subcaption": "Derive a plan to deploy pesticides throughout the city of Chicago by predicting the potential outbreak of West Nile Virus",
        "tech": {
            "model": ["Random Forest Classifier", "SVM", "Gradient Boosting"],
            "viz": ["Matplotlib", "Seaborn"],
            "packages": ["Flask", "Scikit-Learn", "Imblearn", "Pandas", "NumPy"]
        },
        "descriptions": [
            "Comparison between under/oversampling techniques such as SMOTE, ADASYN and Cluster Centroids",
            "Binary classification model comparing Random Forest Classifier, SVM and Gradient Boosting",
            "Accuracy of about 73% and ROC score of 0.882",
            "Model was pickled and deployed on local machine using Flask",
            "Dataset of a total of 8000 rows and 12 columns",
            "Data cleaned and wrangled using Pandas",
            "Feature engineered seemed to have the highest importance",
            "Completed on Jupyter Notebook with Python"
        ],
        "githubUrl": "https://github.com/fadhilaffandi/dsiprojects/tree/master/project_4",
        "imageUrl": "https://images.unsplash.com/photo-1585960691786-a593e76d3847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
        "id": 4,
        "caption": "Sydney Daily Rainfall Predictions",
        "subcaption": "Prediction of daily rainfall for the city of Sydney to aid the Department of Planning, Industry and Environment in planning the city's infrastructure",
        // "tech": [
        //     "Matplotlib",
        //     "Seaborn",
        //     "Scikit-Learn",
        //     "Pandas",
        //     "NumPy",
        //     "Tensorflow"
        // ],
        "tech": {
            "model": ["SARIMAX", "Facebook Prophet", "Gated Recurrent Units"],
            "viz": ["Matplotlib", "Seaborn"],
            "packages": ["Scikit-Learn", "Pandas", "NumPy", "pmdarima", "Tensorflow", "Keras", "Statsmodel"]
        },
        "descriptions": [
            "Data set of 18 columns of weather features and about 3000 rows of data",
            "Predicting the amount of Rainfall in ppt per day",
            "Predictions generated through comparing SARIMAX, Fb Prophet and Gated Recurrent Units",
            "Mean Squared Error of 89mm",
            "Completed with Python and Jupyter Notebook"
        ],
        "githubUrl": "https://github.com/fadhilaffandi/dsiprojects/tree/master/Sydney%20Daily%20Rainfall%20Predictions",
        "imageUrl": "https://sydneynews.sydney/wp-content/uploads/2017/05/395358024_b9376c72c5_b-1.jpg"
    },
]

export { PROJECTS };