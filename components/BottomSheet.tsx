import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wallpaper } from '@/hooks/useWallpapers';

export const DownloadPicture = ({ onClose, wallpaper }: {
    onClose: () => void;
    wallpaper: Wallpaper;
}) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <BottomSheet
            onClose={onClose}
            snapPoints={["90%"]}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            handleIndicatorStyle={{ height: 0 }}
            handleStyle={{ height: 0 }}>
            <BottomSheetView style={styles.contentContainer}>
                <Image style={styles.image} source={{ uri: wallpaper.url }} />
                <Button title='Download'></Button>
            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    image: {
        height: '60%',
    },
});
