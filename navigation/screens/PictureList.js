import React, { useRef, useEffect } from "react";
import { ScrollView, View, Image, StyleSheet, Dimensions } from "react-native";

const PictureList = () => {
  const scrollViewRef = useRef();

  const imagesData = [
    "https://takishop.vn/wp-content/uploads/2019/03/fig642-luffy-gear-5-den-tron-1-1.jpg",
    "https://takishop.vn/wp-content/uploads/2019/03/fig744-gojo-satoru-ngoi-1-400x400.jpg",
    "https://takishop.vn/wp-content/uploads/2019/03/fig280-roronoa-zoro-kimono-trang-15cm-1-1152x1536.jpg",
    // Thêm các đường dẫn hình ảnh khác cần hiển thị
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: Dimensions.get("window").width,
          animated: true,
        });
      }
    }, 1000); // Thay đổi khoảng thời gian theo ý muốn
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {imagesData.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: 200,
  },
  imageContainer: {
    width: Dimensions.get("window").width,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
});

export default PictureList;
