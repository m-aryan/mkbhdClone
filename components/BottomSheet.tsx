import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';

export const DownloadPicture = ({ onClose }: {
    onClose: () => void;
}) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <SafeAreaView style={styles.container}>
            <BottomSheet
                onClose={onClose}
                snapPoints={["90%"]}
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                enablePanDownToClose={true}
                handleIndicatorStyle={{ height: 0 }}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheet>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
