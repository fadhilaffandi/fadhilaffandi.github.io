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
        "imageUrl": "img/projects/studying.jpg",
        "imageAlt": "Photo credit to https://unsplash.com/@craftedbygc"
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
            "Dataset of 81 columns and about 2000 rows of data",
            "Accuracy of about 82%",
            "Completed on Jupyter Notebook with Python"
        ],
        "githubUrl": "https://github.com/fadhilaffandi/dsiprojects/tree/master/project_2",
        "imageUrl": "img/projects/house.jpg",
        "imageAlt": "Photo credit to https://unsplash.com/@chuttersnap"
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
        "imageUrl": "img/projects/reddit.jpg",
        "imageAlt": "Photo credit to https://unsplash.com/@konkarampelas"
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
        "imageUrl": "img/projects/hospital.jpg",
        "imageAlt": "Photo credit to https://unsplash.com/@adhy"
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
            "Dataset of 18 columns of weather features and about 3000 rows of data",
            "Predicting the amount of Rainfall in ppt per day",
            "Predictions generated through comparing SARIMAX, Fb Prophet and Gated Recurrent Units",
            "Mean Squared Error of 89mm",
            "Completed with Python and Jupyter Notebook"
        ],
        "githubUrl": "https://github.com/fadhilaffandi/dsiprojects/tree/master/Sydney%20Daily%20Rainfall%20Predictions",
        "imageUrl": "img/projects/sydney-rain.jpg",
        "imageAlt": "Photo credit to https://sydneynews.sydney"
    },
    {
        "id": 5,
        "caption": "UK Road Accident Analysis",
        "subcaption": "An analysis of road accidents in the UK and factors contributing to their severities",
        "tech": {
            "model": ["Random forest classifier"],
            "viz": ["Tableau"],
            "packages": ["Scikit-Learn", "Pandas", "NumPy", "Imblearn"]
        },
        "descriptions": [
            "Analysed the contributors to accident severity and its distribution relative to other features",
            "Predictions and feature importance generated through comparing Random Forest Classifier",
            "Accuracy of 80%",
            "Dataset of 28 columns of features and about 570,000 rows of data",
            "Completed on Jupyter Notebook with Python",
            "Visualisations done on Tableau, visit <a class='text-link' href='https://public.tableau.com/profile/fadhil.affandi#!/vizhome/RoadAccidentSafety/Casualties'>here to view/download the worksheet</a>",
        ],
        "githubUrl": "https://github.com/fadhilaffandi/uk-road-accidents",
        "imageUrl": "img/projects/accident.jpg",
        "imageAlt": "Photo credit to https://unsplash.com/@michaeljinphoto"
    }
]

export { PROJECTS };