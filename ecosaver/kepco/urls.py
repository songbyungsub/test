from django.urls import path, include
from kepco import views

urlpatterns = [
    path('crawling_kepco_power/',views.crawling_kepco_power, name='crawling_kepco_power'),
    path('crawlingpower/',views.crawl_yearpower, name='crawlingpower'),
    path('uploadaffair/',views.writeaffairs, name='writeaffairs'),
]