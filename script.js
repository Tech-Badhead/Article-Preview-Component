const shareIcon =
  document.getElementById('icon');
const sharePopup =
  document.getElementById(
    'share-popup'
  );

shareIcon.addEventListener(
  'click',
  () => {
    if (
      sharePopup.classList.contains(
        'hidden'
      )
    ) {
      sharePopup.classList.remove(
        'hidden'
      );
    } else {
      sharePopup.classList.add(
        'hidden'
      );
    }
  }
);
