import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Local Imports
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton, RectButton } from './Button';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    // This creates the card that the NFT is housed in
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      {/*  Creates the NFT picture or filler information */}
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={data.image}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;
