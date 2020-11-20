from django.db import models

TOPIC_CHOISES = [
        ("soc", "Типы обществ"),
        ("tax", "Налоги"),
        ("fam", "Семья"),
        ("state", "Государство")
        ]


class Theme(models.Model):
    isChosen1 = models.BooleanField('Выбрана тема "Типы обществ"', default=False)
    isChosen2 = models.BooleanField('Выбрана тема "Налоги"', default=False)
    isChosen3 = models.BooleanField('Выбрана тема "Семья"', default=False)
    isChosen4 = models.BooleanField('Выбрана тема "Государство"', default=False)


class Firquiz(models.Model):
    topic = models.CharField('Тема', max_length=64, choices=TOPIC_CHOISES)
    questionText = models.TextField('Вопрос')
    answerText = models.CharField('Правильный вариант', max_length=64)

    def __str__(self):
        return self.questionText

    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Тренажер "Вставь слово"'


class Secquiz(models.Model):
    topic = models.CharField('Тема', max_length=64, choices=TOPIC_CHOISES)
    questionText = models.TextField('Вопрос')
    option1 = models.CharField('Вариант 1', max_length=64)
    option2 = models.CharField('Вариант 2', max_length=64)
    option3 = models.CharField('Вариант 3', max_length=64)
    option4 = models.CharField('Вариант 4', max_length=64)
    answerText = models.CharField('Правильный вариант', max_length=64)

    def __str__(self):
        return self.questionText

    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Тренажер "Выбери правильный ответ"'

class Thdquiz(models.Model):
    topic = models.CharField('Тема', max_length=64, choices=TOPIC_CHOISES)
    questionText = models.TextField('Утверждение')
    option1 = models.CharField('Вариант 1', max_length=64)
    option2 = models.CharField('Вариант 2', max_length=64)
    answerText = models.CharField('Правильный вариант', max_length=64)

    def __str__(self):
        return self.questionText

    class Meta:
        verbose_name = 'Задание'
        verbose_name_plural = 'Тренажер "Верю-не верю"'
