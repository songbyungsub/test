from django.urls import path, include
from kepco import views

urlpatterns = [
    path('test/',views.crawling_kepco_power, name='kepcopowercrawiling'),
    path('write/',views.test_daypower, name='writeaffairs'),
]