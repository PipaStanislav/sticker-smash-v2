import { StyleSheet, View, Image } from 'react-native';
import EmojiSticker from '../Emoji/EmojiSticker';

const PlaceholderImage = require('../../assets/images/background-image.png');

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default function ImageView({ selectedImage, pickedEmoji, imageRef }) {
  const imageSource = selectedImage !== null ? { uri: selectedImage } : PlaceholderImage;

  return (
    <View style={styles.imageContainer}>
      <View ref={imageRef} collapsable={false}>
        <Image source={imageSource} style={styles.image}/>
        {pickedEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/> : null}
      </View>
    </View>
  );
}

