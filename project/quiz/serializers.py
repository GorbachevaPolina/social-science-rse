from rest_framework import serializers
from .models import Firquiz, Secquiz, Thdquiz, Theme


class ThemesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Theme
        fields = ('isChosen1', 'isChosen2', 'isChosen3', 'isChosen4')


class FirstQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firquiz
        fields = ('questionText', 'answerText')

class SecondQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Secquiz
        fields = ('questionText', 'option1', 'option2', 'option3', 'option4', 'answerText')

class ThirdQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thdquiz
        fields = ('questionText', 'option1', 'option2', 'answerText')