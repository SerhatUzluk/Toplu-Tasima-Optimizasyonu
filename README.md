# Toplu Taşıma Optimizasyonu Uygulaması
## Uygulamanın Amacı:
### Otobüs kullanımında yoğunluk olacak tarihlerin veri tabanına kaydedilmesini sağlayarak, yoğunluğa en uygun taşıt sayısını optimize etmeyi mümkün kılacak.
### Ayrıca iş, okul veya özel amaçlı olarak kullandığınız rotalarda eksikliğini hissettiğiniz seferlerin veya hiç olmayan seferlerin bildirimini sağlayabilmeniz mümkün olacak. Oluşturulan bildirimler veri tabanında tutulacak.

## Ana sayfa ekranı - 1
* Uygulamayı açtığınızda sizi bu sayfa karşılar, hizmetlerin tanımlarını bulundurur. 
 
![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-giris.PNG)

## Ana sayfa ekranı - 2
* Bu kısımda hizmetler hakkında açıklama ve görsel içeren div'ler bulunur ve hizmetlere yönlendirmek için butonlar barındırır.
  
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1.PNG)
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-1.PNG)

## Hat yoğunluk bildirme sayfası
* Bu sayfada kullanıcının kullanıcı tipi, kullanacağı hat bilgisi, gidiş yönü, bineceği durak, ineceği durak, gidiş saati ve dönüş saati bilgilerini girerek kaydetmesi gereklidir.
* 
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-Hat-Bildirim-1.PNG)
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-Hat-Bildirim-3.PNG)

## Rota bildirme sayfası
* Bu sayfada ise kullanıcılar kullanıcı tipi, mevcut konum bilgisi, gidilecek konum bilgisi, gidiş, dönüş saatleri ve haftalık kullanım bilgisini girerek normalde mevcut olmayan bir ulaşım hattı tanımlayabilecek.

  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-%20Rota-Istek-1.PNG)
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-%20Rota-Istek-2.PNG)
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-%20Rota-Istek-3.PNG)
  
## Mevcut hat yoğunlukları sayfası
* Bu sayfada kullanıcıların ilettiği bilgiler kaydedildiği veri tabanından çekilir ve bir tablo olarak gösterilir, aynı zamanda gidiş ve dönüş tarihine göre filtreleme yapılabilir.
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-%20Mevcut-Hat-1.PNG)
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-%20Mevcut-Hat-2.PNG)
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-%20Mevcut-Hat-3.PNG)
  
## Mevcut rota istekleri sayfası
* Bu sayfada ise kullanıcıların ilettiği rota isteklerini görüntülenebilir ve tarihe göre filtrelenebilir. (Konum bilgilerinin latitude ve longitude değerleri görünmektedir.)
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-%20Mevcut-Rota-1.PNG)
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-%20Mevcut-Rota-2.PNG)
  ![Ana sayfa görüntüsü](https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu/blob/main/src/ReadmeImages/Ekran%20Al%C4%B1nt%C4%B1s%C4%B1-%20Mevcut-Rota-3.PNG)
  
# Uygulamada Kullanılan Teknolojiler:

## Front end
* _React + Vite_
* _Bootsrap_ 

## Back end
* _Spring-Boot_
* _MySql_
### Back end kodlarına buradan erişebilirsiniz: https://github.com/SerhatUzluk/Toplu-Tasima-Optimizasyonu-Backend

### Uygulama'da kullanılan apiler: 
* Otobüs durakları: https://acikyesil.bursa.bel.tr/dataset/duraklar
* Otobüs hatları: https://acikyesil.bursa.bel.tr/dataset/hatlar
* Harita bilgileri: https://cloud.maptiler.com/

  **Not:** 🩹 Otobüs hatları ve otobüs durakları API'lerine geçici olarak erişim sağlanamadığından Hat Yoğunluk Bildirme Hizmeti şuan aktif olarak çalışmamaktadır.

* **uygulama linki:** https://toplu-tasima-optimizasyonu.vercel.app/
