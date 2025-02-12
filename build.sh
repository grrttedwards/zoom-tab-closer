zipfile="tab-closer-for-zoom.zip"
echo "Cleaning up..."
rm -f $zipfile
echo "Creating zip..."
files="background.js icon-128.png manifest.json"
zip $zipfile $files
echo "Zipped $zipfile"
