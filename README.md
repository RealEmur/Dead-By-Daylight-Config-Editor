# Dead By Daylight Config Editor
Dead By Daylight Config ayarlarını direkt olarak değiştirebilmenizi sağlar. 

![Dead By Daylight Config Editor](https://media.discordapp.net/attachments/490508014026096650/894643165829660743/unknown.png) 

# Gerekli İşletim Sistemi

* Windows 7 ve sonrası

# İndirme

Programı bilgisayarınıza kurun ve açın. Config dosyalarınız varsa ayarlarınızı değiştirmeye başlayabilirsiniz.


# Değiştirilen Dosyalar

**Appdata/Local/DeadByDaylight/SavednConfig/WindowsNoEditor** dizinindeki **GameUserSettings.ini** ve **Engine.ini** dosyaları düzenlenmektedir. 

## Grafik Ayarları:
**Görüş Mesafesi Kalitesi:** GameUserSettings.ini **->** ViewDistanceQuality  
**Kenar Yumuşatma:** GameUserSettings.ini **->** AntiAliasingQuality  
**Gölge Kalitesi:** GameUserSettings.ini **->** ShadowQuality  
**Post Processing:** GameUserSettings.ini **->** PostProcessQuality  
**Kaplama Kalitesi:** GameUserSettings.ini **->** TextureQuality  
**Efekt Kalitesi:** GameUserSettings.ini **->** EffectsQuality  

## 3D Resolution:
Girilen değer direkt olarak **GameUserSettings.ini**'de bulunan **ScreenResolution** değerini değiştirmektedir.

## FPS Settings
**GameUserSettings.ini**'de bulunan **bUseVSync** değeri false olarak değiştirilir.  

**120 FPS:** GameUserSettings.ini **->** FrameRateLimit = 150  
**Limitsiz FPS:** GameUserSettings.ini **->** FrameRateLimit = 0  

## Anti Aliasing
Etkinleştirildiğinde **Engine.ini**'ye ekleme yapar. Devre dışı bırakıldığında bu kısım tekrardan silinir.

**Düşük:** Değer **1'e** çekilir.  
**Yüksek:** Değer **w'ye** çekilir.

## Otomatik Ayarlar
Aynı şekilde yukaridaki kategorileri değiştirmektedir. Tek farkı otomatik olarak istenilen şekilde düzenlemesidir. 

## Sıfırlama
Config dosyası güncellemeler ile değişebileceği için ne yazıkki sıfırlamak için config dosyalarını silmekten başka çaremiz kalmamaktadır. Yeniden oluşması için oyunu açmanız yeterlidir.
