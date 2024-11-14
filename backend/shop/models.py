from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Clients(models.Model):
    telegram_id = models.CharField(max_length=255)
    date = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True, blank=True)
    end_time = models.TimeField(null=True, blank=True)
    phone = PhoneNumberField(null=True, blank=True)
    class Meta:
        verbose_name = "Клиент"
        verbose_name_plural = "Клиенты"
    
    def __str__(self):
        return f"{self.telegram_id} - {self.date}"
class Instruments(models.Model):
    title = models.CharField(max_length=255)
    img_url = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    price = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Инструмент"
        verbose_name_plural = "Инструменты"
    
    def __str__(self):
        return self.title
    
class Features(models.Model):
    instrument_id = models.ForeignKey(Instruments, on_delete=models.CASCADE)
    feature = models.CharField(max_length=255, null=True, blank=True)
    class Meta:
        verbose_name = "Feature"
        verbose_name_plural = "Features"
    def __str__ (self):
        return f'{self.instrument_id.title} - {self.feature}'
    
class Requests(models.Model):
    telegram_id = models.CharField(max_length=255)
    date = models.DateTimeField()
    phone = models.CharField(max_length=255)
    end_time = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Запись"
        verbose_name_plural = "Записи"
    
    def __str__(self):
        return self.telegram_id
    
class Schedule(models.Model):
    date = models.DateTimeField()
    time = models.CharField(max_length=255)
    end_time = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Расписание"
        verbose_name_plural = "Расписания"
    
    def __str__(self):
        return self.date
    
class Texts(models.Model):
    name = models.CharField(max_length=1000, null=True, blank=True)
    description = models.CharField(max_length=256, null=True, blank=True)
    link = models.CharField(max_length=255, null=True, blank=True)
    icon = models.CharField(max_length=255, null=True, blank=True)
    component = models.CharField(max_length=20, null=True, blank=True)
    
    class Meta:
        verbose_name = "Текст"
        verbose_name_plural = "Тексты"
    
    def __str__(self):
        return f'{self.component} - {self.name}'

class Customers(models.Model):
    artist_name = models.CharField(max_length=25)
    photourl = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    class Meta:
        verbose_name = "Исполнитель"
        verbose_name_plural = "Исполнители" 
    def __str__ (self):
        return self.artist_name
    

class InstrumentListing(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=1000)
    link  = models.CharField(max_length=15, null=True, blank=True)
    features = models.JSONField() 
    images = models.JSONField()    
    headertexts = models.JSONField()
    
    class Meta:
        verbose_name = "Страница инструменттов"
        verbose_name_plural = "Страницы инструментов"
    def __str__(self):
        return self.name