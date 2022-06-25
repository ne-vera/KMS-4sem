using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpotTrigger : MonoBehaviour
{
    public Light Spot;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    private void OnTriggerStay(Collider col)
    {
        if (col.name == "player")
        {
            Spot.transform.Rotate(3, 0, 0);
        }
    }
}
